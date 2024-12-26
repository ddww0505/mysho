import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ItmesModule } from './items/items.module';
import { Item } from './items/item.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [User, Item],
    synchronize: true,
  }),
    UsersModule,
    ItmesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
