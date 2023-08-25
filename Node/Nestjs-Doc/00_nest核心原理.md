# 核心理念

在 Nest.js 中，`控制反转（IoC）`和`依赖注入（DI）`是核心概念，用于管理应用程序的组件和服务。

## 依赖注入（Dependency Injection，DI）

在 Nest.js 中，DI 是一种机制，用于将组件之间的依赖关系注入到它们的构造函数中，而不是在组件内部创建这些依赖关系。这意味着可以通过声明依赖关系并将其注入来告诉 Nest.js 组件需要哪些其他组件或服务。

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(private paymentService: PaymentService) {}

  placeOrder(order) {
    // 处理订单逻辑
    const paymentResult = this.paymentService.processPayment(order.totalAmount);
    // 处理付款结果逻辑
    return paymentResult;
  }
}
```

在上面的示例中，`OrderService` 类通过构造函数接受 `PaymentService` 作为依赖。这意味着 `OrderService` 不需要直接创建 `PaymentService` 的实例，而是将依赖注入其中。这提高了代码的可测试性和可维护性，因为您可以轻松地模拟 `PaymentService` 来进行单元测试。



## 控制反转（Inversion of Control，IoC）

Nest.js 通过依赖注入容器来实现`控制反转`。容器是一个管理组件实例的机制，它负责创建、维护和注入组件之间的依赖关系。您只需在模块中声明依赖关系，容器将负责解析它们。

```typescript
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { PaymentService } from './payment.service';

@Module({
  providers: [OrderService, PaymentService],
})
export class AppModule {}
```

在上述代码中，`AppModule` 声明了 `OrderService` 和 `PaymentService` 作为提供者。Nest.js 的容器会根据这些提供者的声明来创建实例并将它们注入到需要它们的地方，比如 `OrderService` 需要 `PaymentService`。



# 关键问题

## 依赖注入的过程

在 Nest.js 中，`OrderService` 实例化 `PaymentService` 是由 Nest.js 的依赖注入容器在应用程序启动阶段完成的。容器会在应用程序启动时根据`提供者`的声明（通常在模块中进行声明）来实例化和管理服务，然后在需要时注入到其他组件中。

具体来说，以下是完成这个过程的主要步骤：

1. **提供者声明**：在您的 Nest.js 模块中，您会声明哪些服务是提供者。在模块的 `providers` 数组中列出这些服务。

   ```ts
   @Module({
     providers: [OrderService, PaymentService],
   })
   export class AppModule {}
   ```

2. **实例化服务**：当您启动 Nest.js 应用程序时，容器会检查模块的提供者声明，并根据需要实例化这些服务。在这个过程中，容器会创建 `OrderService` 和 `PaymentService` 的实例。

3. **依赖注入**：一旦服务被实例化，容器会注入它们的依赖关系。在您的 `OrderService` 类中，您声明了需要注入 `PaymentService` 的构造函数。容器会自动解析 `PaymentService` 并将其注入到 `OrderService` 中。

   ```ts
   export class OrderService {
     constructor(private paymentService: PaymentService) {}
     // ...
   }
   ```

4. **使用服务**：现在，`OrderService` 实例可以使用注入的 `PaymentService` 实例来执行其工作，如处理订单并调用付款服务。



## 依赖注入容器如何完成依赖关系的解析

在 `Nest.js` 中，容器是通过反射和元数据来解析服务之间的依赖关系的。下面是容器如何解析 `OrderService` 和 `PaymentService` 之间依赖关系的一般过程：

1. **提供者声明**：在您的 Nest.js 模块中，您声明了哪些服务是提供者。在模块的 `providers` 数组中列出这些服务。

   ```typescript
   @Module({
     providers: [OrderService, PaymentService],
   })
   export class AppModule {}
   ```

2. **依赖注入装饰器**：在 `OrderService` 的构造函数中，您使用了依赖注入装饰器 `@Injectable()` 和参数修饰符 `private` 来标记了需要注入的依赖项。

   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class OrderService {
     constructor(private paymentService: PaymentService) {}
     // ...
   }
   ```

3. **元数据**：Nest.js 使用 TypeScript 的反射功能以及装饰器中的元数据来了解服务之间的依赖关系。在上述示例中，`@Injectable()` 装饰器会将 `OrderService` 类标记为一个可注入的服务，并且它会包含有关 `paymentService` 依赖项的信息。

4. **容器解析**：当您启动 Nest.js 应用程序时，容器会自动扫描模块中的提供者声明，并根据元数据信息，了解哪些服务需要被注入到其他服务中。容器会执行以下操作：

   - 首先，它会创建 `PaymentService` 的实例，因为它没有任何依赖项。
   - 接下来，容器会创建 `OrderService` 的实例。在创建 `OrderService` 的实例时，容器会检测到 `OrderService` 构造函数中的 `private paymentService: PaymentService` 参数，并知道需要注入一个 `PaymentService` 的实例。
   - 容器会自动创建 `PaymentService` 的实例，并将它注入到 `OrderService` 的构造函数中。
   - 最终，`OrderService` 的实例现在拥有了一个正确初始化的 `PaymentService` 依赖项。

通过这种方式，容器根据类的元数据和装饰器来动态解析服务之间的依赖关系，并确保它们在应用程序启动时正确初始化和注入。