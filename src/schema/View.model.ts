import mongoose, { Schema } from "mongoose";
import { Viewgroup } from "../libs/enums/view.enum";

const viewSchema = new Schema(
  {
    viewGroup: {
      type: String,
      enum: Viewgroup,
      required: true,
    },

    memberId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member",
    },

    viewRefId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }, //updateAt, createdAt);
);

export default mongoose.model("View", viewSchema);
