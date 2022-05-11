import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  let pipe:GradePipe;
  beforeEach(() => {
    pipe = new GradePipe();
  });
  //test instance creation
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  //test valid grade 1
  it('should return Outstanding when input is  1 ', () => {
    const result:string  = pipe.transform(1);
    expect(result).toBe("Outstanding");
  });

    //test valid grade 2
  it('should return Excellent when input is  2 ', () => {
    const result:string  = pipe.transform(2);
    expect(result).toBe("Excellent");
  });

    //test valid grade 3
  it('should return Good when input is  4 ', () => {
    const result:string  = pipe.transform(4);
    expect(result).toBe("Good");
  });

    //test valid grade 4
  it('should return Average when input is  6 ', () => {
    const result:string  = pipe.transform(6);
    expect(result).toBe("Average");
  });

    //test invalid grade 1
  it('should return empty when input is greater than 10', () => {
    const result:string  = pipe.transform(18);
    expect(result).toBe("");
  });

      //test invalid grade 2
  it('should return empty when input is -1', () => {
    const result:string  = pipe.transform(-1);
    expect(result).toBe("");
  });

 
});
