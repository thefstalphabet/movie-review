"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20221111034950 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20221111034950 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user_entity" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "profile_image" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
        this.addSql('alter table "user_entity" add constraint "user_entity_email_unique" unique ("email");');
    }
}
exports.Migration20221111034950 = Migration20221111034950;
//# sourceMappingURL=Migration20221111034950.js.map