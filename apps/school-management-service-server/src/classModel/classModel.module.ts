import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClassModelModuleBase } from "./base/classModel.module.base";
import { ClassModelService } from "./classModel.service";
import { ClassModelController } from "./classModel.controller";
import { ClassModelResolver } from "./classModel.resolver";

@Module({
  imports: [ClassModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClassModelController],
  providers: [ClassModelService, ClassModelResolver],
  exports: [ClassModelService],
})
export class ClassModelModule {}
