
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestFactory, FastifyAdapter } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Transport } from '@nestjs/common/enums/transport.enum';


async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  // const userApiOptions = new DocumentBuilder()
  //           .setTitle('User API Doc')
  //           .setDescription('User API Info')
  //           .setVersion('1.0')
  //           .addBearerAuth()
  //           .addTag('users') // match tags in controllers
  //           .build();

  // const userApiDocument= SwaggerModule.createDocument(app, userApiOptions, {include: [UserModule]});
  // SwaggerModule.setup('v1/api/user', app, userApiDocument);

=======
  const app = await NestFactory.createMicroservice(AppModule, { // 改為建立microservice
    //transport:Transport.REDIS,
    transport:Transport.NATS,
    options:{
      // url:'redis://192.168.99.101:6379',
      url:'nats://192.168.99.101:4222',
      //port: 5000, // Service的port
      retryAttempts: 5, // 對外request重試次數
      retryDelay: 1000, // 重試間隔
    }
  });
  // app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     port: 3001,
  //     retryAttempts: 5,
  //     retryDelay: 1000,
  //   },
  // });
  // const userApiOptions = new DocumentBuilder()
  //           .setTitle('User API Doc')
  //           .setDescription('User API Info')
  //           .setVersion('1.0')
  //           .addBearerAuth()
  //           .addTag('users') // match tags in controllers
  //           .build();

  // const userApiDocument = SwaggerModule.createDocument(app, userApiOptions, {include: [UserModule]});
  // SwaggerModule.setup('v1/api/user', app, userApiDocument);

>>>>>>> day29
  // const authApiOptions = new DocumentBuilder()
  //           .setTitle('Auth API Doc')
  //           .setDescription('Auth API Info')
  //           .setVersion('1.0')
  //           .addBearerAuth()
  //           .addTag('auth') // match tags in controllers
  //           .build();
<<<<<<< HEAD
  // const authApiDocument= SwaggerModule.createDocument(app, authApiOptions, {include: [AuthModule]});
  // SwaggerModule.setup('v1/api/auth', app, authApiDocument);

  await app.listen(3000);
  
=======
  // const authApiDocument = SwaggerModule.createDocument(app, authApiOptions, {include: [AuthModule]});
  // SwaggerModule.setup('v1/api/auth', app, authApiDocument);
  //app.startAllMicroservicesAsync();
  app.listen(()=>Logger.log('Account Microservice is running'));
>>>>>>> day29
}
bootstrap();