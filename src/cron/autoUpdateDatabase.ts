import cron from 'node-cron';
import api from '../utils/api';

async function autoUpdateDatabase() {
  const getAll = await api.get('/ativos/update');
  console.log(getAll.data);
}

export default cron.schedule("*/5 * * * * *", autoUpdateDatabase);
