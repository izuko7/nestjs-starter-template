import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { CreateExampleDto } from './dto/create-example.dto.js';
import type { UpdateExampleDto } from './dto/update-example.dto.js';

@Injectable()
export class ExampleService {
	constructor(private readonly prisma: PrismaService) {}

	findAll() {
		return [];
	}

	findOne(id: number) {
		const item = null;
		if (!item) throw new NotFoundException(`Item ${id} not found`);
		return item;
	}

	create(dto: CreateExampleDto) {
		return dto;
	}

	update(id: number, dto: UpdateExampleDto) {
		return { id, ...dto };
	}

	remove(id: number) {
		return { id };
	}
}
