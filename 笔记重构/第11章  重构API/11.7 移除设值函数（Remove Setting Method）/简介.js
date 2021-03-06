
//重构前
class Person {
    get name() {
    }

    set name(aString) {
    }
}


//重构后
class Person {
    get name() {
    }
}


/**
 动机
    如果为某个字段提供了设值函数，这就暗示这个字段可以被改变。如果不希望在对象创建之后此字段还有机会被改变，
 那就不要为它提供设值函数（同时将该字段声明为不可变）。这样一来，该字段就只能在构造函数中赋值，我“不想让它
 被修改”的意图会更加清晰，并且可以排除其值被修改的可能性——这种可能性往往是非常大的。

    有两种常见的情况需要讨论。
    一种情况是，有些人喜欢始终通过访问函数来读写字段值，包括在构造函数内也是如此。
 这会导致构造函数成为设值函数的唯一使用者。若果真如此，我更愿意去除设值函数，清晰地表达“构造之后不应该再更
 新字段值”的意图。
    另一种情况是，对象是由客户端通过创建脚本构造出来，而不是只有一次简单的构造函数调用。所谓“创建脚本”，
 首先是调用构造函数，然后就是一系列设值函数的调用，共同完成新对象的构造。创建脚本执行完以后，这个新生对象
 的部分（乃至全部）字段就不应该再被修改。设值函数只应该在起初的对象创建过程中调用。对于这种情况，我也会想办
 法去除设值函数，更清晰地表达我的意图。

 */



/**
做法
    如果构造函数尚无法得到想要设入字段的值，就使用改变函数声明（124）将这个值以参数的形式传入构造函数。在
 构造函数中调用设值函数，对字段设值。
    注意：如果想移除多个设值函数，可以一次性把它们的值都传入构造函数，这能简化后续步骤。
    移除所有在构造函数之外对设值函数的调用，改为使用新的构造函数。每次修改之后都要测试。
    注意：如果不能把“调用设值函数”替换为“创建一个新对象”（例如你需要更新一个多处共享引用的对象），请放弃
 本重构。
    使用内联函数（115）消去设值函数。如果可能的话，把字段声明为不可变。
    测试。
 */





