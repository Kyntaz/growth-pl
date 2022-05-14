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

export interface IVisitor<R> {
    vGarden(garden: Garden): R;
    vSegment(segment: Segment): R;
    vBranch(branch: Branch): R;
    vBooleanLiteral(boolean: BooleanLiteral): R;
    vHereLiteral(here: HereLiteral): R;
    vNameLiteral(name: NameLiteral): R;
    vNumberLiteral(number: NumberLiteral): R;
    vRootLiteral(root: RootLiteral): R;
    vStringLiteral(string: StringLiteral): R;
    vAddOp(add: AddOp): R;
    vAndOp(and: AndOp): R;
    vDivideOp(divide: DivideOp): R;
    vEqualsOp(equals: EqualsOp): R;
    vGreaterThanOp(gt: GreaterThanOp): R;
    vGreaterThanOrEqualsOp(gte: GreaterThanOrEqualsOp): R;
    vLessThanOp(lt: LessThanOp): R;
    vLessThanOrEqualsOp(lte: LessThanOrEqualsOp): R;
    vModuloOp(modulo: ModuloOp): R;
    vMultiplyOp(multiply: MultiplyOp): R;
    vNotEqualsOp(notEquals: NotEqualsOp): R;
    vOrOp(or: OrOp): R;
    vReferenceOp(reference: ReferenceOp): R;
    vSubtractOp(subtract: SubtractOp): R;
}