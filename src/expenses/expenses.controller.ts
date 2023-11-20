import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service.js';
import { ExpenseDto } from './dto/expense.dto.js';
import { UpdateExpenseDto } from './dto/updateExpense.dto.js';

// TODO add in errors
// TODO add in a get one end point
// TODO add in testing
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

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
    this.expensesService.createExpense(expenseDto);
  }

  // TODO Figure out whats the right return type here
  @Patch(':id')
  async updateExpense(
    @Param('id') id: string,
    @Body() updateExpense: UpdateExpenseDto,
  ) {
    this.expensesService.updateExpense(id, updateExpense);
  }

  @Delete(':id')
  async removeExpense(@Param('id') id: string): Promise<void> {
    this.expensesService.removeExpense(id);
  }
}
