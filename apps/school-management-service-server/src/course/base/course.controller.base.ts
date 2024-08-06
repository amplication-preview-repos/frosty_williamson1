/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CourseService } from "../course.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CourseCreateInput } from "./CourseCreateInput";
import { Course } from "./Course";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseWhereUniqueInput } from "./CourseWhereUniqueInput";
import { CourseUpdateInput } from "./CourseUpdateInput";
import { ClassModelFindManyArgs } from "../../classModel/base/ClassModelFindManyArgs";
import { ClassModel } from "../../classModel/base/ClassModel";
import { ClassModelWhereUniqueInput } from "../../classModel/base/ClassModelWhereUniqueInput";
import { GradeFindManyArgs } from "../../grade/base/GradeFindManyArgs";
import { Grade } from "../../grade/base/Grade";
import { GradeWhereUniqueInput } from "../../grade/base/GradeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CourseControllerBase {
  constructor(
    protected readonly service: CourseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Course })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CourseCreateInput,
  })
  async createCourse(@common.Body() data: CourseCreateInput): Promise<Course> {
    return await this.service.createCourse({
      data: data,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Course] })
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async courses(@common.Req() request: Request): Promise<Course[]> {
    const args = plainToClass(CourseFindManyArgs, request.query);
    return this.service.courses({
      ...args,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async course(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    const result = await this.service.course({
      where: params,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CourseUpdateInput,
  })
  async updateCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() data: CourseUpdateInput
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCourse(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse({
        where: params,
        select: {
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/classes")
  @ApiNestedQuery(ClassModelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ClassModel",
    action: "read",
    possession: "any",
  })
  async findClasses(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<ClassModel[]> {
    const query = plainToClass(ClassModelFindManyArgs, request.query);
    const results = await this.service.findClasses(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endTime: true,
        id: true,
        startTime: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/classes")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectClasses(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/classes")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateClasses(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/classes")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectClasses(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ClassModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      classes: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/grades")
  @ApiNestedQuery(GradeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Grade",
    action: "read",
    possession: "any",
  })
  async findGrades(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Grade[]> {
    const query = plainToClass(GradeFindManyArgs, request.query);
    const results = await this.service.findGrades(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        grade: true,
        id: true,
        student: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/grades")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectGrades(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/grades")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateGrades(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/grades")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectGrades(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }
}
