import { Migration } from '@mikro-orm/migrations';

export class Migration20221111034950 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user_entity" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "profile_image" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user_entity" add constraint "user_entity_email_unique" unique ("email");');
  }

}
