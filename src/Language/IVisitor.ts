import {
    AddOp,
    AndOp,
    BooleanLiteral,
    Branch,
    DivideOp,
    EqualsOp,
    HereLiteral,
    NameLiteral,
    NumberLiteral,
    RootLiteral,
    StringLiteral,
    Garden,
    Segment,
    GreaterThanOp,
    GreaterThanOrEqualsOp,
    LessThanOp,
    LessThanOrEqualsOp,
    ModuloOp,
    MultiplyOp,
    NotEqualsOp,
    OrOp,
    ReferenceOp,
    SubtractOp
} from "./AST/AST";

export interface IVisitor {
    vGarden(garden: Garden): any;
    vSegment(segment: Segment): any;
    vBranch(branch: Branch): any;
    vBooleanLiteral(boolean: BooleanLiteral): any;
    vHereLiteral(here: HereLiteral): any;
    vNameLiteral(name: NameLiteral): any;
    vNumberLiteral(number: NumberLiteral): any;
    vRootLiteral(root: RootLiteral): any;
    vStringLiteral(string: StringLiteral): any;
    vAddOp(add: AddOp): any;
    vAndOp(and: AndOp): any;
    vDivideOp(divide: DivideOp): any;
    vEqualsOp(equals: EqualsOp): any;
    vGreaterThanOp(gt: GreaterThanOp): any;
    vGreaterThanOrEqualsOp(gte: GreaterThanOrEqualsOp): any;
    vLessThanOp(lt: LessThanOp): any;
    vLessThanOrEqualsOp(lte: LessThanOrEqualsOp): any;
    vModuloOp(modulo: ModuloOp): any;
    vMultiplyOp(multiply: MultiplyOp): any;
    vNotEqualsOp(notEquals: NotEqualsOp): any;
    vOrOp(or: OrOp): any;
    vReferenceOp(reference: ReferenceOp): any;
    vSubtractOp(subtract: SubtractOp): any;
}