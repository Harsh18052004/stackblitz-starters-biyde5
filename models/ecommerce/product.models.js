import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    description: {
      requried: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model('Product', productSchema);

// If you start storing IMAGES in your mongodb database then it might make it heavy because of buffering. Therefore it is efficient to strore images at Online servers like AWS buckets and in return you can fetch data using Public_URL. Another example is Cloudenery.
