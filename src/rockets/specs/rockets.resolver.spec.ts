import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpConfigService } from '../../_utils/http-config.service';
import { RocketsResolver } from '../rockets.resolver';
import { RocketsService } from '../rockets.service';

describe('RocketsResolver', () => {
  let resolver: RocketsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      providers: [RocketsResolver, RocketsService],
    }).compile();

    resolver = module.get<RocketsResolver>(RocketsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
