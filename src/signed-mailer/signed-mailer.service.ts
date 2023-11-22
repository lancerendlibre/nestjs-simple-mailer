import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SignedMailerService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(to: string, subject: string, data: any): Promise<void> {
    await this.mailerService.sendMail({
      from: 'contact@atsuhiro.site',
      to: to,
      subject: subject,
      text: data,
    });
  }
}
