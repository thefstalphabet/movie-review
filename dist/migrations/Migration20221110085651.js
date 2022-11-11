"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20221110085651 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20221110085651 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "profile_image" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
        this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    }
}
exports.Migration20221110085651 = Migration20221110085651;
//# sourceMappingURL=Migration20221110085651.js.map