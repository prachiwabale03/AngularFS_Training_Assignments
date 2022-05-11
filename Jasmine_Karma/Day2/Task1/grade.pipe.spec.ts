import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  let pipe:GradePipe;
  beforeEach(() => {
    pipe = new GradePipe();
  });
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return Outstanding when input is  1 ', () => {
    const result:string  = pipe.transform(1);
    expect(result).toBe("Outstanding");
  });
  it('should return Excellent when input is  2 ', () => {
    const result:string  = pipe.transform(2);
    expect(result).toBe("Excellent");
  });

  it('should return Good when input is  4 ', () => {
    const result:string  = pipe.transform(4);
    expect(result).toBe("Good");
  });

  it('should return Average when input is  6 ', () => {
    const result:string  = pipe.transform(6);
    expect(result).toBe("Average");
  });

  it('should return empty when input is invalid marks', () => {
    const result:string  = pipe.transform(18);
    expect(result).toBe("");
  });

  it('should return empty when input is invalid marks', () => {
    const result:string  = pipe.transform(-1);
    expect(result).toBe("");
  });

 
});
