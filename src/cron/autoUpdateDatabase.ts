import cron from 'node-cron';
import api from '../utils/api';

async function autoUpdateDatabase() {  
  const getAll = await api.get('/update');
  console.log(getAll.data);
  return getAll;
};

export default cron.schedule("*/1 * * * *", autoUpdateDatabase);
