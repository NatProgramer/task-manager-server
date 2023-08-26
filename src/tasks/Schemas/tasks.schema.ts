import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum priorityValues {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export enum statusValue {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE',
}

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ required: true, unique: true, trim: true })
  title: string;

  @Prop({ requred: false, trim: true })
  description: string;

  @Prop({ requred: false, default: statusValue.PENDING })
  status: statusValue;

  @Prop({ required: false, default: priorityValues.LOW })
  priority: priorityValues;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
