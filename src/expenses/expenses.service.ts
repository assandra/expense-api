import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity.js';
import { ExpenseDto } from './dto/expense.dto.js';
import { plainToClass } from '@nestjs/class-transformer';
import { UpdateExpenseDto } from './dto/updateExpense.dto.js';

@Injectable()
export class ExpensesService {
  constructor(
    @Inject('EXPENSE_REPOSITORY')
    private expensesRepository: Repository<Expense>,
  ) {}

  async getAllExpenses(): Promise<ExpenseDto[]> {
    const expenses = await this.expensesRepository.find();
    return plainToClass(ExpenseDto, expenses);
  }

  // TODO move this into own private repo
  async getExpensesSummary(): Promise<number> {
    const val = await this.expensesRepository
      .createQueryBuilder('expenses')
      .addSelect('SUM(expenses.cost)', 'totalCost')
      .getRawOne();
    return val.totalCost;
  }

  async createExpense(expense: ExpenseDto): Promise<void> {
    // TODO move this out
    expense['cost'] = expense['cost'] * 100;
    await this.expensesRepository.save(expense);
  }

  async removeExpense(id: string): Promise<void> {
    await this.expensesRepository.delete(id);
  }

  async updateExpense(
    id: string,
    updateExpense: UpdateExpenseDto,
  ): Promise<void> {
    await this.expensesRepository.update(id, updateExpense);
  }
}
