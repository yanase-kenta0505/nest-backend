import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  /**
   * @link https://docs.nestjs.com/graphql/migration-guide#federation
   */
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
