import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
<<<<<<< HEAD
=======
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
=======
  // Global validation pipe
>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
<<<<<<< HEAD
    }),
  );

  await app.listen(3000);
}
=======
      transform: true,
    }),
  );

  // Global API prefix
  app.setGlobalPrefix('api');
// Swagger configuration
const swaggerConfig = new DocumentBuilder()
  .setTitle('Task Management API')
  .setDescription('API documentation for your project')
  .setVersion('1.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Enter JWT token here',
    },
    'JWT-auth',
  )
  .build();

// Create Swagger document
const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

// Setup UI at /docs
SwaggerModule.setup('docs', app, swaggerDocument);

 

  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Application running on http://localhost:${port}`);
  console.log(`📘 Swagger available at http://localhost:${port}/docs`);
}

>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da
bootstrap();
