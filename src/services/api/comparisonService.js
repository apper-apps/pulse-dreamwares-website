import comparisonData from "@/services/mockData/comparisonData.json";

// Simulate API delay for realistic loading states
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const comparisonService = {
  async getAll() {
    await delay(300);
    return [...comparisonData];
  },

  async getById(id) {
    await delay(200);
    const item = comparisonData.find(item => item.Id === parseInt(id));
    return item ? { ...item } : null;
  },

  async create(newItem) {
    await delay(400);
    const maxId = Math.max(...comparisonData.map(item => item.Id || 0), 0);
    const itemWithId = {
      ...newItem,
      Id: maxId + 1
    };
    comparisonData.push(itemWithId);
    return { ...itemWithId };
  },

  async update(id, updates) {
    await delay(350);
    const index = comparisonData.findIndex(item => item.Id === parseInt(id));
    if (index !== -1) {
      comparisonData[index] = { ...comparisonData[index], ...updates };
      return { ...comparisonData[index] };
    }
    return null;
  },

  async delete(id) {
    await delay(250);
    const index = comparisonData.findIndex(item => item.Id === parseInt(id));
    if (index !== -1) {
      const deleted = comparisonData.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }
};