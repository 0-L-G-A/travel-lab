import { Test, TestingModule } from '@nestjs/testing';
import { SignupController } from './signup.controller';

describe('SignupController', () => {
  let Controller: SignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupController],
    }).compile();

    Controller = module.get<SignupController>(SignupController);
  });

  it('should be defined', () => {
    expect(Controller).toBeDefined();
  });
});
