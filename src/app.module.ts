import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignedMailerModule } from './signed-mailer/signed-mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SignedMailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
