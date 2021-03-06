/*

曾用名：自封装字段（Self-Encapsulate Field）

曾用名：封装字段（Encapsulate Field）

 */


//修改前
let defaultOwner = {firstName: "Martin", lastName: "Fowler"};


// 修改后
let defaultOwnerData = {firstName: "Martin", lastName: "Fowler"};
export function defaultOwner() {
    return defaultOwnerData;
}
export function setDefaultOwner(arg) {
    defaultOwnerData = arg;
}



/*
动机
       重构的作用就是调整程序中的元素。函数相对容易调整一些，因为函数只有一种用法，就是调用。
    在改名或搬移函数的过程中，总是可以比较容易地保留旧函数作为转发函数（即旧代码调用旧函数，旧函数再调用新函数）。
    这样的转发函数通常不会存在太久，但的确能够简化重构过程。数据就要麻烦得多，因为没办法设计这样的转发机制。
    如果我把数据搬走，就必须同时修改所有引用该数据的代码，否则程序就不能运行。如果数据的可访问范围很小，比如一个小函数内部的临时变量，那还不成问题。
    但如果可访问范围变大，重构的难度就会随之增大，这也是说全局数据是大麻烦的原因。
    所以，如果想要搬移一处被广泛使用的数据，最好的办法往往是先以函数形式封装所有对该数据的访问。这样，我就能把“重新组织数据”的困难任务转化为“重新组织函数”这个相对简单的任务。
    封装数据的价值还不止于此。封装能提供一个清晰的观测点，可以由此监控数据的变化和使用情况；我还可以轻松地添加数据被修改时的验证或后续逻辑。

    我的习惯是：对于所有可变的数据，只要它的作用域超出单个函数，我就会将其封装起来，只允许通过函数访问。数据的作用域越大，封装就越重要。
    处理遗留代码时，一旦需要修改或增加使用可变数据的代码，我就会借机把这份数据封装起来，从而避免继续加重耦合一份已经广泛使用的数据。

    面向对象方法如此强调对象的数据应该保持私有（private），背后也是同样的原理。
    每当看见一个公开（public）的字段时，我就会考虑使用封装变量（在这种情况下，这个重构手法常被称为封装字段）来缩小其可见范围。
    一些更激进的观点认为，即便在类内部，也应该通过访问函数来使用字段——这种做法也称为“自封装”。
    大体而言，我认为自封装有点儿过度了——如果一个类大到需要将字段自封装起来的程度，那么首先应该考虑把这个类拆小。不过，在分拆类之前，自封装字段倒是一个有用的步骤。

    封装数据很重要，不过，不可变数据更重要。如果数据不能修改，就根本不需要数据更新前的验证或者其他逻辑钩子。
    我可以放心地复制数据，而不用搬移原来的数据——这样就不用修改使用旧数据的代码，也不用担心有些代码获得过时失效的数据。不可变性是强大的代码防腐剂。
 */




/*
做法
  创建封装函数，在其中访问和更新变量值。

  执行静态检查。

  逐一修改使用该变量的代码，将其改为调用合适的封装函数。每次替换之后，执行测试。

  限制变量的可见性。

  有时没办法阻止直接访问变量。若果真如此，可以试试将变量改名，再执行测试，找出仍在直接使用该变量的代码。

  测试。

  如果变量的值是一个记录，考虑使用封装记录（162）。
 */
































