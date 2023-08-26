import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { priorityValues, statusValues } from '../dto/task.enum';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ required: true, unique: true, trim: true })
  title: string;

  @Prop({ requred: false, trim: true })
  description: string;

  @Prop({ requred: false, default: statusValues.PENDING })
  status: statusValues;

  @Prop({ required: false, default: priorityValues.LOW })
  priority: priorityValues;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
