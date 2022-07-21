import autoUpdateDatabase from './autoUpdateDatabase';

class ManagerCron{
  private jobs;

  constructor(){
    this.jobs = [autoUpdateDatabase]
  }

  run()  { this.jobs.forEach(job => job.start()) }
}

export default new ManagerCron();
