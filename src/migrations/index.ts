import * as migration_20260901_205423_initial from './20260901_205423_initial';

export const migrations = [
  {
    up: migration_20260901_205423_initial.up,
    down: migration_20260901_205423_initial.down,
    name: '20260901_205423_initial'
  },
];
