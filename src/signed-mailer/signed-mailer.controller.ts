import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { SignedMailerService } from './signed-mailer.service';

@Controller('signed-mailer')
export class SignedMailerController {
  @Inject(SignedMailerService)
  private readonly service: SignedMailerService;

  @Post('send')
  @HttpCode(204)
  async envoy(
    @Body()
    { to, subject, content }: { to: string; subject: string; content: string },
    @Res() res: Response,
  ) {
    try {
      await this.service.sendMail(to, subject, content);
      res.status(HttpStatus.CREATED).json({ msg: 'mail succesfully envoyed' });
    } catch (error) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ msg: 'failed to send email', error });
    }
  }
}
