import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
    constructor() {}

    @Get(':id')
    async get(@Param('id') id: string) {}

    @Post('create')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

    @Delete(':id')
    async delete(@Param('id') id: string) {}

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindTopPageDto) {}
}
