import valuePropositionData from "@/services/mockData/valuePropositions.json";

// Simulate API delay for realistic loading states
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const valuePropositionService = {
  async getAll() {
    await delay(400);
    return [...valuePropositionData];
  },

  async getById(id) {
    await delay(250);
    const item = valuePropositionData.find(item => item.Id === parseInt(id));
    return item ? { ...item } : null;
  },

  async create(newItem) {
    await delay(500);
    const maxId = Math.max(...valuePropositionData.map(item => item.Id || 0), 0);
    const itemWithId = {
      ...newItem,
      Id: maxId + 1
    };
    valuePropositionData.push(itemWithId);
    return { ...itemWithId };
  },

  async update(id, updates) {
    await delay(400);
    const index = valuePropositionData.findIndex(item => item.Id === parseInt(id));
    if (index !== -1) {
      valuePropositionData[index] = { ...valuePropositionData[index], ...updates };
      return { ...valuePropositionData[index] };
    }
    return null;
  },

  async delete(id) {
    await delay(300);
    const index = valuePropositionData.findIndex(item => item.Id === parseInt(id));
    if (index !== -1) {
      const deleted = valuePropositionData.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }
};