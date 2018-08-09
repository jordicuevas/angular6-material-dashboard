import { HttpUtilsModule } from './http-utils.module';

describe('HttpUtilsModule', () => {
  let httpUtilsModule: HttpUtilsModule;

  beforeEach(() => {
    httpUtilsModule = new HttpUtilsModule();
  });

  it('should create an instance', () => {
    expect(httpUtilsModule).toBeTruthy();
  });
});
