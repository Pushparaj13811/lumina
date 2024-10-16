import User from './models/User.js';
import WellnessData from './models/WellnessData.js';
import ScreenTime from './models/ScreenTime.js';
import WorkLifeBalance from './models/WorkLifeBalance.js';
import BurnoutRisk from './models/BurnoutRisk.js';
import Family from './models/Family.js';

// Inside your startServer function
await User.sync();
await WellnessData.sync();
await ScreenTime.sync();
await WorkLifeBalance.sync();
await BurnoutRisk.sync();
await Family.sync();

