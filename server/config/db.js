import dns from 'dns';
import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI is not set in the environment');
  }

  // mongodb+srv:// URIs need a DNS SRV lookup before they can connect.
  // Some local/corporate networks can't resolve SRV records with their
  // default resolver (ECONNREFUSED on querySrv) even though plain A-record
  // lookups work fine — pointing Node's resolver at public DNS fixes that.
  // Harmless to leave on elsewhere (e.g. Render's own network resolves SRV
  // records fine either way).
  if (uri.startsWith('mongodb+srv://')) {
    dns.setServers(['1.1.1.1', '8.8.8.8']);
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(uri);
  console.log(`[db] MongoDB connected: ${mongoose.connection.host}`);

  mongoose.connection.on('error', (err) => {
    console.error('[db] MongoDB connection error:', err.message);
  });

  return mongoose.connection;
}
