import { LogicModule } from './logic.module';

describe('LogicModule', () => {
    let module: LogicModule;

    beforeEach(() => {
        module = new LogicModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});
