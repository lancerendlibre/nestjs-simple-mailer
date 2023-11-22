import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { SignedMailerService } from './signed-mailer.service';
import { SignedMailerController } from './signed-mailer.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const mailerConfig = {
          transport: {
            host: configService.getOrThrow<string>('MAILER_HOST'),
            port: 465,
            secure: true,
            auth: {
              user: configService.getOrThrow('MAILER_FROM_ADDRESS'),
              pass: configService.getOrThrow('MAIL_FROM_PWD'),
            },
            dkim: {
              domainName: configService.getOrThrow('MAILER_DOMAIN_NAME'),
              privateKey: configService.getOrThrow('MAILER_PRIVATE_KEY'),
              keySelector: 'default',
              headerFieldNames: 'From,To,Subject',
            },
          },
        };
        return mailerConfig;
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [SignedMailerController],
  providers: [SignedMailerService],
})
export class SignedMailerModule {}
