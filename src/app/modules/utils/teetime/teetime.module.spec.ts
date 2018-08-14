import { TeetimeModule } from './teetime.module';

describe('TeetimeModule', () => {
  let teetimeModule: TeetimeModule;

  beforeEach(() => {
    teetimeModule = new TeetimeModule();
  });

  it('should create an instance', () => {
    expect(teetimeModule).toBeTruthy();
  });
});
