import {sqliteTable,text,integer,index} from 'drizzle-orm/sqlite-core';
export const records=sqliteTable('records',{id:text('id').primaryKey(),kind:text('kind').notNull(),data:text('data').notNull(),revision:integer('revision').notNull().default(1),updated:text('updated').notNull()},t=>[index('idx_records_kind_updated').on(t.kind,t.updated)]);
export const settings=sqliteTable('settings',{key:text('key').primaryKey(),value:text('value').notNull()});
export const locks=sqliteTable('locks',{key:text('key').primaryKey(),expires:integer('expires').notNull()});
