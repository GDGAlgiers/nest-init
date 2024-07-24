/* eslint-disable prettier/prettier */


 
import { Module } from '@nestjs/common';
import { CommandRunnerModule } from 'nest-commander';
import { PrismaConfigCommand } from './commands/prisma-config.command';
import { PackageManagerService } from './utils/packageManager.service';
import { FileManagerService } from './utils/fileManager.service';
import { TypeOrmConfigCommand } from './commands/typeOrm-config.command';
import { SequelizeConfigCommand } from './commands/sequelize-config.command';
import { AuthConfigCommand } from './commands/auth-config.command';
import { AppController } from './app.controller';

@Module({
providers:[AuthConfigCommand,SequelizeConfigCommand,PrismaConfigCommand,TypeOrmConfigCommand, PackageManagerService, FileManagerService,FileManager,AppService],
imports:[  CommandRunnerModule,  ],
controllers:[AppController],

})
export class AppModule {}
