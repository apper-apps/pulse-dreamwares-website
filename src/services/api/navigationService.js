import navigationData from "@/services/mockData/navigationItems.json";

// Simulate API delay for realistic loading states
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const navigationService = {
  async getAll() {
    await delay(300);
    return [...navigationData];
  },

  async getById(id) {
    await delay(200);
    const item = navigationData.find(item => item.Id === parseInt(id));
    return item ? { ...item } : null;
  },

  async create(newItem) {
    await delay(400);
    const maxId = Math.max(...navigationData.map(item => item.Id || 0), 0);
    const itemWithId = {
      ...newItem,
      Id: maxId + 1
    };
    navigationData.push(itemWithId);
    return { ...itemWithId };
  },

  async update(id, updates) {
    await delay(350);
    const index = navigationData.findIndex(item => item.Id === parseInt(id));
    if (index !== -1) {
      navigationData[index] = { ...navigationData[index], ...updates };
      return { ...navigationData[index] };
    }
    return null;
  },

  async delete(id) {
    await delay(250);
    const index = navigationData.findIndex(item => item.Id === parseInt(id));
    if (index !== -1) {
      const deleted = navigationData.splice(index, 1)[0];
      return { ...deleted };
    }
    return null;
  }
};