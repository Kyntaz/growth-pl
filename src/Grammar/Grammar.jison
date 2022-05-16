%lex

%%

\s+ /* whitespace */

"perfect"\b {
    return "perfect";
}

"bogus"\b {
    return "bogus";
}

"@" {
    return "@";
}

[a-zA-Z_][a-zA-Z_0-9]*\b {
    return "NAME";
}

[0-9]+("."[0-9]+)?\b {
    return "NUMBER";
}

"#" {
    return "#";
}

\"[^\"]*\" {
    return "STRING";
}

"+" {
    return "+";
}

"&" {
    return "&";
}

"/" {
    return "/";
}

">" {
    return ">";
}

">=" {
    return ">=";
}

"<" {
    return "<";
}

"=<" {
    return "=<";
}

"%" {
    return "%";
}

"*" {
    return "*";
}

"!=" {
    return "!=";
}

"=" {
    return "=";
}

"|" {
    return "|";
}

"$" {
    return "$";
}

"-" {
    return "-";
}

"{" {
    return "{";
}

"}" {
    return "}";
}

"(" {
    return "(";
}

")" {
    return ")";
}

";" {
    return ";";
}

"," {
    return ",";
}

"?" {
    return "?";
}

":" {
    return ":";
}

/lex

%left "&" "|"
%left "<" "=<" ">" ">=" "=" "!="
%left "%"
%left "+" "-"
%left "*" "/"
%left UMINUS
%left "$"

%start garden

%%

garden
    : segments
    {
        const seeds = $1.filter((segment) => segment.command === "seed");
        const [trunk] = $1.filter((segment) => segment.command === "trunk");
        return new yy.Garden(seeds, trunk);
    }
    ;

segments
    :
    {
        $$ = [];
    }
    | segments segment
    {
        $$ = [...$1, $2];
    }
    ;

segment
    : ":" command expressions ";"
    {
        $$ = new yy.Segment($2, $3);
    }
    | segmentId ":" command expressions ";"
    {
        $$ = new yy.Segment($3, $4, $1);
    }
    ;

segmentId
    : NAME
    {
        $$ = yytext;
    }
    ;

command
    : NAME
    {
        $$ = yytext;
    }
    | "="
    {
        $$ = "=";
    }
    | "?"
    {
        $$ = "?";
    }
    ;

expressions
    :
    {
        $$ = [];
    }
    | expression
    {
        $$ = [$1];
    }
    | expressions "," expression
    {
        $$ = [...$1, $3];
    }
    ;

expression
    : e
    {
        $$ = $1;
    }
    ;

e
    : e "&" e
    {
        $$ = new yy.AndOp($1, $3);
    }
    | e "|" e
    {
        $$ = new yy.OrOp($1, $3);
    }
    | e "<" e
    {
        $$ = new yy.LessThanOp($1, $3);
    }
    | e "=<" e
    {
        $$ = new yy.LessThanOrEqualsOp($1, $3);
    }
    | e ">" e
    {
        $$ = new yy.GreaterThanOp($1, $3);
    }
    | e ">=" e
    {
        $$ = new yy.GreaterThanOrEqualsOp($1, $3);
    }
    | e "=" e
    {
        $$ = new yy.EqualsOp($1, $3);
    }
    | e "!=" e
    {
        $$ = new yy.NotEqualsOp($1, $3);
    }
    | e "%" e
    {
        $$ = new yy.ModuloOp($1, $3);
    }
    | e "+" e
    {
        $$ = new yy.AddOp($1, $3);
    }
    | e "-" e
    {
        $$ = new yy.SubtractOp($1, $3);
    }
    | e "*" e
    {
        $$ = new yy.MultiplyOp($1, $3);
    }
    | e "/" e
    {
        $$ = new yy.DivideOp($1, $3);
    }
    | "-" e %prec UMINUS
    {
        $$ = null; // To do...
    }
    | "$" e
    {
        $$ = new yy.ReferenceOp($2);
    }
    | "(" e ")"
    {
        $$ = $2;
    }
    | "{" segments "}"
    {
        $2.map((segment, i) => segment.line = i);
        $$ = new yy.Branch($2);
    }
    | "perfect"
    {
        $$ = new yy.BooleanLiteral(true);
    }
    | "bogus"
    {
        $$ = new yy.BooleanLiteral(false);
    }
    | "@"
    {
        $$ = new yy.HereLiteral();
    }
    | NAME
    {
        $$ = new yy.NameLiteral(yytext);
    }
    | NUMBER
    {
        $$ = new yy.NumberLiteral(Number(yytext));
    }
    | "#"
    {
        $$ = new yy.RootLiteral();
    }
    | STRING
    {
        $$ = new yy.StringLiteral(yytext.slice(1, -1));
    }
    ;
