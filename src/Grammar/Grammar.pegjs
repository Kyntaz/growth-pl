{{
    import * as AST from "../Language/AST/AST";
}}

garden
    = segments:(_ out:segment _ { return out; })* {
        const seeds = segments.filter((segment: AST.Segment) => segment.command === "seed");
        const [trunk] = segments.filter((segment: AST.Segment) => segment.command === "trunk");
        return new AST.Garden(seeds, trunk);
    }

segment
    = _ name:(out:$name _ ":" { return out })? _ command:$command __ args:args _ ";" {
        return new AST.Segment(command, args, name);
    }

args
    = head:expression tail:(_ "," _ out:expression { return out; })* {
        return [head, ...tail];
    }

command
    = $name
    / "="
    / "?"

literal
    = boolean
    / here
    / name
    / number
    / string

expression
    = branch
    / "(" out:expression ")" { return out; }
    / add
    / and
    / divide
    / equals
    / gt
    / gte
    / lt
    / lte
    / modulo
    / multiply
    / or
    / reference
    / subtract
    / literal

branch
    = "{" segments:(_ out:segment _ { return out })* "}" {
        return new AST.Branch(segments);
    }

boolean
    = "perfect" {
        return new AST.BooleanLiteral(true);
    }
    / "bogus" {
        return new AST.BooleanLiteral(false);
    }

here
    = "@" {
        return new AST.HereLiteral();
    }

name
    = name:$(letter alphanumeric*) {
        return new AST.NameLiteral(name)
    }

number
    = number:$("-"? digit+ ("." digit+)?) {
        return new AST.NumberLiteral(Number(number));
    }

string
    = "\"" string:$[^\n]* "\"" {
        return new AST.StringLiteral(string);
    }

add
    = _ left:literal _ "+" _ right:expression _ {
        return new AST.AddOp(left, right);
    }

and
    = _ left:literal _ "&" _ right:expression _ {
        return new AST.AndOp(left, right);
    }

divide
    = _ left:literal _ "/" _ right:expression _ {
        return new AST.DivideOp(left,right);
    }

equals
    = _ left:literal _ "=" _ right:expression _ {
        return new AST.EqualsOp(left, right);
    }

gt
    = _ left:literal _ ">" _ right:expression _ {
        return new AST.GreaterThanOp(left, right);
    }

gte
    = _ left:literal _ ">=" _ right:expression _ {
        return new AST.GreaterThanOrEqualsOp(left, right);
    }

lt
    = _ left:literal _ "<" _ right:expression _ {
        return new AST.LessThanOp(left, right);
    }

lte
    = _ left:literal _ "=<" _ right:expression _ {
        return new AST.LessThanOrEqualsOp(left, right);
    }

modulo
    = _ left:literal _ "%" _ right:expression _ {
        return new AST.ModuloOp(left, right);
    }

multiply
    = _ left:literal _ "*" _ right:expression _ {
        return new AST.MultiplyOp(left, right);
    }

or
    = _ left:literal _ "|" _ right:expression _ {
        return new AST.OrOp(left, right);
    }

subtract
    = _ left:literal _ "-" _ right:expression _ {
        return new AST.SubtractOp(left, right);
    }

reference
    = "$" _ arg:expression _ {
        return new AST.ReferenceOp(arg);
    }

letter = [a-z_]i
digit = [0-9]
alphanumeric = letter / digit
_ = [ \t\r\n]*
__ = [ \t\r\n]*
