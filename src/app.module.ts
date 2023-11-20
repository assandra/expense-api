import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses/expenses.controller.js';
import { ExpensesService } from './expenses/expenses.service.js';
import { expenseProviders } from './expenses/expenses.provider.js';
import { DatabaseModule } from './database.module.js';
import { databaseProviders } from './database.providers.js';

// TODO create own module
@Module({
  imports: [DatabaseModule],
  controllers: [ExpensesController],
  providers: [...expenseProviders, ...databaseProviders, ExpensesService],
})
export class AppModule {}
