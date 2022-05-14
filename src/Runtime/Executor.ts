import {
    AddOp,
    AndOp,
    BooleanLiteral,
    Branch,
    DivideOp,
    EqualsOp,
    Garden,
    GreaterThanOp,
    GreaterThanOrEqualsOp,
    HereLiteral,
    LessThanOp,
    LessThanOrEqualsOp,
    ModuloOp,
    MultiplyOp,
    NameLiteral,
    NotEqualsOp,
    NumberLiteral,
    OrOp,
    ReferenceOp,
    RootLiteral,
    Segment,
    StringLiteral,
    SubtractOp
} from "../Language/AST/AST";
import { IVisitor } from "../Language/IVisitor";
import { Runtime } from "./Runtime";
import { Location } from "./Location";

export class Executor implements IVisitor {
    constructor(private runtime: Runtime) { }

    public vGarden(garden: Garden) {
        for (const seed of garden.seeds) {
            seed.accept(this);
        }

        garden.trunk.accept(this);
    }

    public vSegment(segment: Segment) {
        const argVals: any[] = segment.args.map((arg) => arg.accept(this));
        const loc = this.runtime.doCommand(segment.command, argVals, segment.name);
        if (segment.name) {
            this.runtime.assign(segment.name, loc);
        }
    }

    public vBranch(branch: Branch) {
        return branch;
    }

    public vBooleanLiteral(boolean: BooleanLiteral) {
        return boolean.value;
    }

    public vHereLiteral(here: HereLiteral) {
        return this.runtime.where();
    }

    public vNameLiteral(name: NameLiteral) {
        return this.runtime.read(name.value);
    }

    public vNumberLiteral(number: NumberLiteral) {
        return number.value;
    }

    public vRootLiteral(root: RootLiteral) {
        return this.runtime.currentRoot();
    }

    public vStringLiteral(string: StringLiteral) {
        return string.value;
    }

    public vAddOp(add: AddOp) {
        const leftVal: any = add.left.accept(this);
        const rightVal: any = add.right.accept(this);

        if (typeof leftVal === "object") {
            const location = leftVal as Location;
            return {
                branch: location.branch,
                at: location.at + rightVal,
            } as Location;
        } 

        return leftVal + rightVal;
    }

    public vAndOp(and: AndOp) {
        const leftVal: any = and.left.accept(this);
        const rightVal: any = and.right.accept(this);
        return leftVal && rightVal;
    }

    public vDivideOp(divide: DivideOp) {
        const leftVal: any = divide.left.accept(this);
        const rightVal: any = divide.right.accept(this);
        return leftVal / rightVal;
    }

    public vEqualsOp(equals: EqualsOp) {
        const leftVal: any = equals.left.accept(this);
        const rightVal: any = equals.right.accept(this);
        return leftVal === rightVal;
    }

    public vGreaterThanOp(gt: GreaterThanOp) {
        const leftVal: any = gt.left.accept(this);
        const rightVal: any = gt.right.accept(this);
        return leftVal > rightVal;
    }

    public vGreaterThanOrEqualsOp(gte: GreaterThanOrEqualsOp) {
        const leftVal: any = gte.left.accept(this);
        const rightVal: any = gte.right.accept(this);
        return leftVal >= rightVal;
    }

    public vLessThanOp(lt: LessThanOp) {
        const leftVal: any = lt.left.accept(this);
        const rightVal: any = lt.right.accept(this);
        return leftVal < rightVal;
    }

    public vLessThanOrEqualsOp(lte: LessThanOrEqualsOp) {
        const leftVal: any = lte.left.accept(this);
        const rightVal: any = lte.right.accept(this);
        return leftVal <= rightVal;
    }

    public vModuloOp(modulo: ModuloOp) {
        const leftVal: any = modulo.left.accept(this);
        const rightVal: any = modulo.right.accept(this);
        return leftVal % rightVal;
    }

    public vMultiplyOp(multiply: MultiplyOp) {
        const leftVal: any = multiply.left.accept(this);
        const rightVal: any = multiply.right.accept(this);
        return leftVal * rightVal;
    }

    public vNotEqualsOp(notEquals: NotEqualsOp) {
        const leftVal: any = notEquals.left.accept(this);
        const rightVal: any = notEquals.right.accept(this);
        return leftVal !== rightVal;
    }

    public vOrOp(or: OrOp) {
        const leftVal: any = or.left.accept(this);
        const rightVal: any = or.right.accept(this);
        return leftVal || rightVal;
    }

    public vReferenceOp(reference: ReferenceOp) {
        const argVal: any = reference.arg.accept(this);
        return this.runtime.at(argVal);
    }

    public vSubtractOp(subtract: SubtractOp) {
        const leftVal: any = subtract.left.accept(this);
        const rightVal: any = subtract.right.accept(this);

        if (typeof leftVal === "object") {
            const location = leftVal as Location;
            return {
                branch: location.branch,
                at: location.at - rightVal,
            } as Location;
        } 

        return leftVal - rightVal;
    }
}
