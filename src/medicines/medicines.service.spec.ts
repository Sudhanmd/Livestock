import { Test, TestingModule } from '@nestjs/testing';
import { MedicineService } from './medicines.service';

describe('MedicinesService', () => {
  let service: MedicineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicineService],
    }).compile();

    service = module.get<MedicineService>(MedicineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
