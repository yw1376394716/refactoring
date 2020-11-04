//反向重构：移除中间人（192）

//重构前
manager = aPerson.department.manager;
class Person {
    get department() {
        return this.department;
    }
}


//重构后
manager = aPerson.manager;
class Person1 {
    get manager() {
        return this.department.manager;
    }
}


/**
 动机
     一个好的模块化的设计，“封装”即使不是其最关键特征，也是最关键特征之一。
    “封装”意味着每个模块都应该尽可能少了解系统的其他部分。如此一来，一旦发生变化，需要了
 解这一变化的模块就会比较少——这会使变化比较容易进行。

    当我们初学面向对象技术时就被教导，封装意味着应该隐藏自己的字段。随着经验日渐丰富，你
 会发现，有更多可以（而且值得）封装的东西。

    如果某些客户端先通过服务对象的字段得到另一个对象（受托类），然后调用后者的函数，那么
 客户就必须知晓这一层委托关系。万一受托类修改了接口，变化会波及通过服务对象使用它的所有客
 户端。我可以在服务对象上放置一个简单的委托函数，将委托关系隐藏起来，从而去除这种依赖。这
 么一来，即使将来委托关系发生变化，变化也只会影响服务对象，而不会直接波及所有客户端。
 */


/**
做法
    对于每个委托关系中的函数，在服务对象端建立一个简单的委托函数。
    调整客户端，令它只调用服务对象提供的函数。每次调整后运行测试。
    如果将来不再有任何客户端需要取用Delegate（受托类），便可移除服务对象中的相关
 访问函数。
    测试。
*/


