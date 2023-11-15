import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExpensesService } from './expenses.service.js';
import { ExpenseDto } from './dto/expense.dto.js';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) { }

  @Get()
  async getAllExpenses(): Promise<ExpenseDto[]> {
    return this.expensesService.getAllExpenses();
  }

  @Get('summary')
  async getExpensesSummary(): Promise<number> {
    return this.expensesService.getExpensesSummary();
  }

  @Post()
  async createExpense(@Body() expenseDto: ExpenseDto): Promise<void> {
    console.log('In the controller', expenseDto)
    this.expensesService.createExpense(expenseDto);
  }
}
