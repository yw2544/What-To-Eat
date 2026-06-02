const openMojiBase = "https://openmoji.org/data/color/svg/";

const categories = [
  { id: "staple", label: "主食" },
  { id: "produce", label: "蔬果" },
  { id: "protein", label: "蛋白质" },
  { id: "other", label: "其他" },
];

const iconLibrary = [
  { id: "rice", label: "米饭", category: "staple", code: "1F35A", keywords: "rice cooked rice 饭 米饭 米" },
  { id: "bread", label: "面包", category: "staple", code: "1F35E", keywords: "bread 面包 吐司" },
  { id: "baguette", label: "法棍", category: "staple", code: "1F956", keywords: "baguette 法棍 面包" },
  { id: "bagel", label: "贝果", category: "staple", code: "1F96F", keywords: "bagel 贝果 面包" },
  { id: "pancakes", label: "煎饼", category: "staple", code: "1F95E", keywords: "pancake 煎饼 饼" },
  { id: "waffle", label: "华夫饼", category: "staple", code: "1F9C7", keywords: "waffle 华夫饼 早餐" },
  { id: "noodles", label: "面条", category: "staple", code: "1F35C", keywords: "noodle ramen 面条 面 拉面" },
  { id: "spaghetti", label: "意面", category: "staple", code: "1F35D", keywords: "spaghetti pasta 意面 意大利面" },
  { id: "dumpling", label: "饺子", category: "staple", code: "1F95F", keywords: "dumpling 饺子 馄饨" },
  { id: "dango", label: "丸子", category: "staple", code: "1F361", keywords: "dango 丸子 团子" },
  { id: "flatbread", label: "薄饼", category: "staple", code: "1FAD3", keywords: "flatbread pita 薄饼 饼" },
  { id: "corn", label: "玉米", category: "staple", code: "1F33D", keywords: "corn maize 玉米" },
  { id: "potato", label: "土豆", category: "staple", code: "1F954", keywords: "potato 土豆 马铃薯" },
  { id: "sweet-potato", label: "红薯", category: "staple", code: "1F360", keywords: "sweet potato 红薯 地瓜" },
  { id: "bowl", label: "粥碗", category: "staple", code: "1F963", keywords: "bowl spoon porridge 粥 碗" },
  { id: "burger", label: "汉堡", category: "staple", code: "1F354", keywords: "burger hamburger 汉堡" },
  { id: "sandwich", label: "三明治", category: "staple", code: "1F96A", keywords: "sandwich 三明治" },
  { id: "pizza", label: "披萨", category: "staple", code: "1F355", keywords: "pizza 披萨" },
  { id: "sushi", label: "寿司", category: "staple", code: "1F363", keywords: "sushi 寿司" },
  { id: "bento", label: "便当", category: "staple", code: "1F371", keywords: "bento 便当 饭盒" },

  { id: "tomato", label: "番茄", category: "produce", code: "1F345", keywords: "tomato 番茄 西红柿" },
  { id: "leafy-green", label: "青菜", category: "produce", code: "1F96C", keywords: "leafy green greens 青菜 绿叶菜 生菜" },
  { id: "carrot", label: "胡萝卜", category: "produce", code: "1F955", keywords: "carrot 胡萝卜 萝卜" },
  { id: "broccoli", label: "西兰花", category: "produce", code: "1F966", keywords: "broccoli 西兰花 花椰菜" },
  { id: "mushroom", label: "蘑菇", category: "produce", code: "1F344", keywords: "mushroom 蘑菇 香菇" },
  { id: "onion", label: "洋葱", category: "produce", code: "1F9C5", keywords: "onion 洋葱" },
  { id: "garlic", label: "大蒜", category: "produce", code: "1F9C4", keywords: "garlic 大蒜 蒜" },
  { id: "pepper", label: "辣椒", category: "produce", code: "1F336-FE0F", keywords: "pepper chili 辣椒" },
  { id: "cucumber", label: "黄瓜", category: "produce", code: "1F952", keywords: "cucumber pickle 黄瓜 青瓜" },
  { id: "eggplant", label: "茄子", category: "produce", code: "1F346", keywords: "eggplant aubergine 茄子" },
  { id: "avocado", label: "牛油果", category: "produce", code: "1F951", keywords: "avocado 牛油果 鳄梨" },
  { id: "apple", label: "苹果", category: "produce", code: "1F34E", keywords: "apple red apple 苹果" },
  { id: "green-apple", label: "青苹果", category: "produce", code: "1F34F", keywords: "green apple 青苹果 苹果" },
  { id: "pear", label: "梨", category: "produce", code: "1F350", keywords: "pear 梨" },
  { id: "orange", label: "橙子", category: "produce", code: "1F34A", keywords: "orange tangerine 橙子 橘子" },
  { id: "lemon", label: "柠檬", category: "produce", code: "1F34B", keywords: "lemon 柠檬" },
  { id: "banana", label: "香蕉", category: "produce", code: "1F34C", keywords: "banana 香蕉" },
  { id: "watermelon", label: "西瓜", category: "produce", code: "1F349", keywords: "watermelon 西瓜" },
  { id: "grapes", label: "葡萄", category: "produce", code: "1F347", keywords: "grapes 葡萄" },
  { id: "strawberry", label: "草莓", category: "produce", code: "1F353", keywords: "strawberry 草莓" },
  { id: "blueberries", label: "蓝莓", category: "produce", code: "1FAD0", keywords: "blueberry blueberries 蓝莓" },
  { id: "cherries", label: "樱桃", category: "produce", code: "1F352", keywords: "cherry cherries 樱桃" },
  { id: "peach", label: "桃子", category: "produce", code: "1F351", keywords: "peach 桃子" },
  { id: "pineapple", label: "菠萝", category: "produce", code: "1F34D", keywords: "pineapple 菠萝 凤梨" },
  { id: "mango", label: "芒果", category: "produce", code: "1F96D", keywords: "mango 芒果" },
  { id: "coconut", label: "椰子", category: "produce", code: "1F965", keywords: "coconut 椰子" },
  { id: "kiwi", label: "猕猴桃", category: "produce", code: "1F95D", keywords: "kiwi 猕猴桃 奇异果" },
  { id: "melon", label: "甜瓜", category: "produce", code: "1F348", keywords: "melon 甜瓜 哈密瓜" },
  { id: "beans", label: "豆类", category: "produce", code: "1FAD8", keywords: "beans bean 豆 豆类" },
  { id: "pea-pod", label: "豌豆", category: "produce", code: "1FADB", keywords: "pea peas 豌豆 毛豆" },
  { id: "ginger", label: "姜", category: "produce", code: "1FADA", keywords: "ginger 姜 生姜" },
  { id: "herb", label: "香草", category: "produce", code: "1F33F", keywords: "herb herbs 香草 葱 香菜" },
  { id: "seedling", label: "芽苗", category: "produce", code: "1F331", keywords: "seedling sprout 芽苗 豆芽" },
  { id: "chestnut", label: "栗子", category: "produce", code: "1F330", keywords: "chestnut 栗子 板栗" },
  { id: "peanuts", label: "花生", category: "produce", code: "1F95C", keywords: "peanuts nuts 花生 坚果" },

  { id: "egg", label: "鸡蛋", category: "protein", code: "1F95A", keywords: "egg eggs 鸡蛋 蛋" },
  { id: "milk", label: "牛奶", category: "protein", code: "1F95B", keywords: "milk 牛奶 奶" },
  { id: "cheese", label: "奶酪", category: "protein", code: "1F9C0", keywords: "cheese 奶酪 芝士" },
  { id: "butter", label: "黄油", category: "protein", code: "1F9C8", keywords: "butter 黄油" },
  { id: "meat", label: "肉排", category: "protein", code: "1F969", keywords: "meat steak beef 肉 牛肉 肉排" },
  { id: "meat-bone", label: "带骨肉", category: "protein", code: "1F356", keywords: "meat bone pork ribs 肉 排骨 猪肉" },
  { id: "chicken-leg", label: "鸡腿", category: "protein", code: "1F357", keywords: "chicken poultry 鸡肉 鸡腿" },
  { id: "bacon", label: "培根", category: "protein", code: "1F953", keywords: "bacon 培根" },
  { id: "fish", label: "鱼", category: "protein", code: "1F41F", keywords: "fish 鱼" },
  { id: "tropical-fish", label: "海鱼", category: "protein", code: "1F420", keywords: "fish tropical 海鱼 鱼" },
  { id: "shrimp", label: "虾", category: "protein", code: "1F990", keywords: "shrimp prawn 虾" },
  { id: "crab", label: "蟹", category: "protein", code: "1F980", keywords: "crab 蟹 螃蟹" },
  { id: "lobster", label: "龙虾", category: "protein", code: "1F99E", keywords: "lobster 龙虾" },
  { id: "octopus", label: "章鱼", category: "protein", code: "1F419", keywords: "octopus 章鱼" },
  { id: "squid", label: "鱿鱼", category: "protein", code: "1F991", keywords: "squid 鱿鱼" },
  { id: "chicken", label: "整鸡", category: "protein", code: "1F414", keywords: "chicken 鸡 整鸡" },
  { id: "turkey", label: "火鸡", category: "protein", code: "1F983", keywords: "turkey 火鸡" },
  { id: "cow", label: "牛肉", category: "protein", code: "1F404", keywords: "cow beef 牛肉 牛" },
  { id: "pig", label: "猪肉", category: "protein", code: "1F416", keywords: "pig pork 猪肉 猪" },
  { id: "hot-dog", label: "香肠", category: "protein", code: "1F32D", keywords: "hot dog sausage 香肠 热狗" },
  { id: "taco", label: "塔可", category: "protein", code: "1F32E", keywords: "taco 塔可" },
  { id: "falafel", label: "豆丸", category: "protein", code: "1F9C6", keywords: "falafel 豆丸 素蛋白" },
  { id: "canned-food", label: "罐头", category: "protein", code: "1F96B", keywords: "canned food 罐头 午餐肉" },
  { id: "tofu", label: "豆腐", category: "protein", code: "25FB", keywords: "tofu 豆腐 方块" },
  { id: "nut", label: "坚果", category: "protein", code: "1F95C", keywords: "nuts peanut 坚果 花生" },

  { id: "salt", label: "盐", category: "other", code: "1F9C2", keywords: "salt 盐" },
  { id: "olive", label: "橄榄油", category: "other", code: "1FAD2", keywords: "olive oil 橄榄 油 橄榄油" },
  { id: "tea", label: "茶", category: "other", code: "1F375", keywords: "tea 茶" },
  { id: "coffee", label: "咖啡", category: "other", code: "2615", keywords: "coffee 咖啡" },
  { id: "honey", label: "蜂蜜", category: "other", code: "1F36F", keywords: "honey 蜂蜜" },
  { id: "candy", label: "糖果", category: "other", code: "1F36C", keywords: "candy 糖果 糖" },
  { id: "chocolate", label: "巧克力", category: "other", code: "1F36B", keywords: "chocolate 巧克力" },
  { id: "cookie", label: "饼干", category: "other", code: "1F36A", keywords: "cookie 饼干" },
  { id: "cake", label: "蛋糕", category: "other", code: "1F370", keywords: "cake 蛋糕 甜点" },
  { id: "ice-cream", label: "冰淇淋", category: "other", code: "1F368", keywords: "ice cream 冰淇淋" },
  { id: "pot", label: "汤锅", category: "other", code: "1F372", keywords: "pot soup hotpot 汤锅 火锅" },
  { id: "pan", label: "锅料理", category: "other", code: "1F958", keywords: "pan paella 锅 炒菜" },
  { id: "wine", label: "料酒", category: "other", code: "1F377", keywords: "wine 料酒 酒" },
  { id: "beer", label: "啤酒", category: "other", code: "1F37A", keywords: "beer 啤酒" },
  { id: "drink", label: "饮料", category: "other", code: "1F964", keywords: "drink beverage 饮料" },
  { id: "chopsticks", label: "筷子", category: "other", code: "1F962", keywords: "chopsticks 筷子 餐具" },
  { id: "takeout", label: "外卖盒", category: "other", code: "1F961", keywords: "takeout box 外卖 盒饭" },
  { id: "salad", label: "沙拉", category: "other", code: "1F957", keywords: "salad 沙拉" },
  { id: "popcorn", label: "爆米花", category: "other", code: "1F37F", keywords: "popcorn 爆米花 零食" },
  { id: "moon-cake", label: "点心", category: "other", code: "1F96E", keywords: "moon cake pastry 点心 月饼" },
];

const storageKeys = {
  ingredients: "what-to-eat.ingredients.v1",
  mealPlan: "what-to-eat.meal-plan.v1",
};

const defaultIngredients = [
  { id: 1, name: "米饭", category: "staple", code: "1F35A", expiry: "6/4", note: "冷藏剩饭" },
  { id: 2, name: "面包", category: "staple", code: "1F35E", expiry: "6/6", note: "早餐可用" },
  { id: 3, name: "面条", category: "staple", code: "1F35C", expiry: "6/12", note: "柜子里" },
  { id: 4, name: "番茄", category: "produce", code: "1F345", expiry: "明天", note: "优先吃" },
  { id: 5, name: "青菜", category: "produce", code: "1F96C", expiry: "6/3", note: "洗净后尽快吃" },
  { id: 6, name: "苹果", category: "produce", code: "1F34E", expiry: "6/10", note: "零食" },
  { id: 7, name: "蘑菇", category: "produce", code: "1F344", expiry: "6/5", note: "适合炒蛋" },
  { id: 8, name: "鸡蛋", category: "protein", code: "1F95A", expiry: "6/10", note: "常备" },
  { id: 9, name: "牛奶", category: "protein", code: "1F95B", expiry: "6/7", note: "已开封" },
  { id: 10, name: "鱼", category: "protein", code: "1F41F", expiry: "6/4", note: "晚餐候选" },
  { id: 11, name: "盐", category: "other", code: "1F9C2", expiry: "未设置", note: "调味" },
  { id: 12, name: "橄榄油", category: "other", code: "1FAD2", expiry: "未设置", note: "调味" },
  { id: 13, name: "咖啡", category: "other", code: "2615", expiry: "未设置", note: "早餐" },
];

function loadIngredients() {
  try {
    const saved = localStorage.getItem(storageKeys.ingredients);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveIngredients() {
  localStorage.setItem(storageKeys.ingredients, JSON.stringify(ingredients));
}

let ingredients = loadIngredients();

const emptyMeals = [
  { type: "breakfast", label: "早餐", dish: "+ 添加", detail: "还没想好" },
  { type: "lunch", label: "午餐", dish: "+ 添加", detail: "还没想好" },
  { type: "dinner", label: "晚餐", dish: "+ 添加", detail: "还没想好" },
];

const defaultMealPlan = {
  today: [
    { type: "breakfast", label: "早餐", dish: "燕麦牛奶", detail: "简单一点，配苹果" },
    { type: "lunch", label: "午餐", dish: "番茄鸡蛋面", detail: "用到番茄、鸡蛋、面条" },
    { type: "dinner", label: "晚餐", dish: "+ 添加", detail: "还没想好" },
  ],
  tomorrow: [
    { type: "breakfast", label: "早餐", dish: "+ 添加", detail: "明天早上再定" },
    { type: "lunch", label: "午餐", dish: "煎鱼配青菜", detail: "用到鱼、青菜、米饭" },
    { type: "dinner", label: "晚餐", dish: "+ 添加", detail: "留空也可以" },
  ],
};

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDayDifference(fromDateKey, toDateKey = getDateKey()) {
  const from = new Date(`${fromDateKey}T00:00:00`);
  const to = new Date(`${toDateKey}T00:00:00`);
  return Math.round((to - from) / 86400000);
}

function cloneMeals(meals) {
  return meals.map((meal) => ({ ...meal }));
}

function createMealPlan() {
  return {
    date: getDateKey(),
    today: cloneMeals(emptyMeals),
    tomorrow: cloneMeals(emptyMeals),
  };
}

function normalizeMealPlan(plan) {
  if (!plan?.date || !Array.isArray(plan.today) || !Array.isArray(plan.tomorrow)) {
    return createMealPlan();
  }

  const diff = getDayDifference(plan.date);
  if (diff <= 0) return plan;
  if (diff === 1) {
    return {
      date: getDateKey(),
      today: cloneMeals(plan.tomorrow),
      tomorrow: cloneMeals(emptyMeals),
    };
  }

  return {
    date: getDateKey(),
    today: cloneMeals(emptyMeals),
    tomorrow: cloneMeals(emptyMeals),
  };
}

function loadMealPlan() {
  try {
    const saved = localStorage.getItem(storageKeys.mealPlan);
    const plan = saved ? JSON.parse(saved) : createMealPlan();
    const normalized = normalizeMealPlan(plan);
    localStorage.setItem(storageKeys.mealPlan, JSON.stringify(normalized));
    return normalized;
  } catch {
    return createMealPlan();
  }
}

function saveMealPlan() {
  localStorage.setItem(storageKeys.mealPlan, JSON.stringify(mealPlan));
}

let mealPlan = loadMealPlan();

let selectedDay = "today";
let selectedIngredientId = null;
let selectedIcon = iconLibrary[0];
let selectedIconCategory = "all";
let selectedIconTouched = false;
let selectedExpiry = { mode: "unset", month: null, day: null };
let selectedIngredientCategory = "staple";
let selectedMealType = null;
let editingIngredientId = null;

const pantryRows = document.querySelector("#pantryRows");
const mealList = document.querySelector("#mealList");
const modal = document.querySelector("#ingredientModal");
const modalIcon = document.querySelector("#modalIcon");
const ingredientTitle = document.querySelector("#ingredientTitle");
const ingredientCategory = document.querySelector("#ingredientCategory");
const ingredientExpiry = document.querySelector("#ingredientExpiry");
const ingredientNote = document.querySelector("#ingredientNote");
const addModal = document.querySelector("#addModal");
const addForm = document.querySelector("#addForm");
const addTitle = document.querySelector("#addTitle");
const ingredientFormEyebrow = document.querySelector("#ingredientFormEyebrow");
const ingredientSaveButton = document.querySelector("#ingredientSaveButton");
const categoryInput = document.querySelector("#ingredientCategoryInput");
const nameInput = document.querySelector("#ingredientNameInput");
const noteInput = document.querySelector("#ingredientNoteInput");
const iconSearchInput = document.querySelector("#iconSearchInput");
const iconTabs = document.querySelector("#iconTabs");
const iconGrid = document.querySelector("#iconGrid");
const iconCount = document.querySelector("#iconCount");
const selectedIconPreview = document.querySelector("#selectedIconPreview");
const expiryPreview = document.querySelector("#expiryPreview");
const expiryQuickButtons = document.querySelector("#expiryQuickButtons");
const monthWheel = document.querySelector("#monthWheel");
const dayWheel = document.querySelector("#dayWheel");
const mealModal = document.querySelector("#mealModal");
const mealForm = document.querySelector("#mealForm");
const mealDishInput = document.querySelector("#mealDishInput");
const mealEditTitle = document.querySelector("#mealEditTitle");
const mealInputLabel = document.querySelector("#mealInputLabel");

function iconUrl(code) {
  return `${openMojiBase}${code}.svg`;
}

function getCategoryLabel(id) {
  return categories.find((category) => category.id === id)?.label ?? "其他";
}

function renderPantry() {
  pantryRows.innerHTML = categories
    .map((category) => {
      const items = ingredients.filter((item) => item.category === category.id);
      const cards = items
        .map(
          (item) => `
            <button class="ingredient-card" type="button" data-id="${item.id}">
              <img src="${iconUrl(item.code)}" alt="" />
              <strong>${item.name}</strong>
              <span>${item.expiry}</span>
            </button>
          `,
        )
        .join("");

      return `
        <div class="pantry-row">
          <div class="category-label ${category.id}">${category.label}</div>
          <div class="ingredient-track">${cards}</div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".ingredient-card").forEach((card) => {
    card.addEventListener("click", () => openIngredient(Number(card.dataset.id)));
  });
}

function renderMeals() {
  mealList.innerHTML = mealPlan[selectedDay]
    .map(
      (meal) => `
        <button class="meal-card" type="button" data-meal-type="${meal.type}">
            <div class="meal-name ${meal.type}">${meal.label}</div>
          <div class="meal-content">
            <strong>${meal.dish}</strong>
            <span>${meal.detail}</span>
          </div>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".meal-card").forEach((card) => {
    let pressTimer;
    let longPressed = false;

    card.addEventListener("click", () => {
      if (longPressed) {
        longPressed = false;
        return;
      }
      openMealEditor(card.dataset.mealType);
    });
    card.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      openMealEditor(card.dataset.mealType);
    });
    card.addEventListener("touchstart", () => {
      longPressed = false;
      pressTimer = window.setTimeout(() => {
        longPressed = true;
        openMealEditor(card.dataset.mealType);
      }, 520);
    });
    card.addEventListener("touchend", () => window.clearTimeout(pressTimer));
    card.addEventListener("touchcancel", () => window.clearTimeout(pressTimer));
  });
}

function openMealEditor(type) {
  const meal = mealPlan[selectedDay].find((item) => item.type === type);
  if (!meal) return;

  selectedMealType = type;
  mealEditTitle.textContent = `编辑${meal.label}`;
  mealInputLabel.textContent = `${selectedDay === "today" ? "今日" : "明日"} · ${meal.label}`;
  mealDishInput.value = meal.dish === "+ 添加" ? "" : meal.dish;
  mealModal.hidden = false;
  mealDishInput.focus();
}

function closeMealEditor() {
  mealModal.hidden = true;
  selectedMealType = null;
}

function saveMealEditor(dishValue) {
  const meal = mealPlan[selectedDay].find((item) => item.type === selectedMealType);
  if (!meal) return;

  const dish = dishValue.trim();
  meal.dish = dish || "+ 添加";
  meal.detail = dish ? "手动计划" : "还没想好";
  saveMealPlan();
  renderMeals();
  closeMealEditor();
}

function renderCategoryOptions() {
  categoryInput.innerHTML = categories
    .map(
      (category) => `
        <button class="${selectedIngredientCategory === category.id ? "active" : ""}" type="button" data-ingredient-category="${category.id}">
          ${category.label}
        </button>
      `,
    )
    .join("");

  categoryInput.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedIngredientCategory = button.dataset.ingredientCategory;
      selectedIconCategory = selectedIngredientCategory;
      renderCategoryOptions();
      renderIconTabs();
      renderIconGrid();
      autoSelectIcon();
    });
  });
}

function renderIconTabs() {
  const tabs = [{ id: "all", label: "全部" }, ...categories];
  iconTabs.innerHTML = tabs
    .map(
      (tab) => `
        <button class="${tab.id === selectedIconCategory ? "active" : ""}" type="button" data-category="${tab.id}">
          ${tab.label}
        </button>
      `,
    )
    .join("");

  iconTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedIconCategory = button.dataset.category;
      renderIconTabs();
      renderIconGrid();
    });
  });
}

function getFilteredIcons() {
  const query = iconSearchInput.value.trim().toLowerCase();
  return iconLibrary.filter((icon) => {
    const categoryMatches = selectedIconCategory === "all" || icon.category === selectedIconCategory;
    const textMatches =
      !query ||
      icon.label.toLowerCase().includes(query) ||
      icon.keywords.toLowerCase().includes(query) ||
      getCategoryLabel(icon.category).toLowerCase().includes(query);
    return categoryMatches && textMatches;
  });
}

function renderIconGrid() {
  const icons = getFilteredIcons();
  iconCount.textContent = `${icons.length} 个`;
  if (!icons.length) {
    iconGrid.innerHTML = `<div class="empty-icons">没有匹配图标，可以清空搜索后手动选择。</div>`;
    return;
  }

  iconGrid.innerHTML = icons
    .map(
      (icon) => `
        <button class="icon-option ${selectedIcon.id === icon.id ? "selected" : ""}" type="button" data-icon-id="${icon.id}">
          <img src="${iconUrl(icon.code)}" alt="" />
          <span>${icon.label}</span>
        </button>
      `,
    )
    .join("");

  iconGrid.querySelectorAll(".icon-option").forEach((button) => {
    button.addEventListener("click", () => {
      const icon = iconLibrary.find((item) => item.id === button.dataset.iconId);
      if (!icon) return;
      selectedIconTouched = true;
      selectedIcon = icon;
      renderSelectedIcon();
      renderIconGrid();
    });
  });
}

function renderSelectedIcon() {
  selectedIconPreview.innerHTML = `<img src="${iconUrl(selectedIcon.code)}" alt="" />`;
}

function daysInMonth(month) {
  const year = new Date().getFullYear();
  return new Date(year, month, 0).getDate();
}

function formatExpiry(expiry = selectedExpiry) {
  if (expiry.mode === "unset") return "未设置";
  if (expiry.mode === "today") return "今天";
  if (expiry.mode === "tomorrow") return "明天";
  if (expiry.mode === "date") return `${expiry.month}/${expiry.day}`;
  return "未设置";
}

function parseExpiry(value) {
  if (!value || value === "未设置") return { mode: "unset", month: null, day: null };
  if (value === "今天") {
    const date = getDateAfter(0);
    return { mode: "today", ...date };
  }
  if (value === "明天") {
    const date = getDateAfter(1);
    return { mode: "tomorrow", ...date };
  }

  const match = value.match(/^(\d{1,2})\/(\d{1,2})$/);
  if (match) {
    return {
      mode: "date",
      month: Number(match[1]),
      day: Number(match[2]),
    };
  }

  return { mode: "unset", month: null, day: null };
}

function getDateAfter(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return { month: date.getMonth() + 1, day: date.getDate() };
}

function renderExpiryPicker() {
  const quickOptions = [
    { id: "unset", label: "未设置" },
    { id: "today", label: "今天" },
    { id: "tomorrow", label: "明天" },
    { id: "week", label: "一周后" },
  ];
  expiryPreview.textContent = formatExpiry();
  expiryQuickButtons.innerHTML = quickOptions
    .map(
      (option) => `
        <button class="${selectedExpiry.mode === option.id ? "active" : ""}" type="button" data-expiry-quick="${option.id}">
          ${option.label}
        </button>
      `,
    )
    .join("");

  expiryQuickButtons.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const option = button.dataset.expiryQuick;
      if (option === "unset") selectedExpiry = { mode: "unset", month: null, day: null };
      if (option === "today") {
        const date = getDateAfter(0);
        selectedExpiry = { mode: "today", ...date };
      }
      if (option === "tomorrow") {
        const date = getDateAfter(1);
        selectedExpiry = { mode: "tomorrow", ...date };
      }
      if (option === "week") {
        const date = getDateAfter(7);
        selectedExpiry = { mode: "date", ...date };
      }
      renderExpiryPicker();
    });
  });

  const fallback = getDateAfter(3);
  const selectedMonth = selectedExpiry.month ?? fallback.month;
  const selectedDay = Math.min(selectedExpiry.day ?? fallback.day, daysInMonth(selectedMonth));

  monthWheel.innerHTML = Array.from({ length: 12 }, (_, index) => index + 1)
    .map(
      (month) => `
        <button class="${selectedMonth === month ? "selected" : ""}" type="button" data-month="${month}">
          ${month}月
        </button>
      `,
    )
    .join("");

  dayWheel.innerHTML = Array.from({ length: daysInMonth(selectedMonth) }, (_, index) => index + 1)
    .map(
      (day) => `
        <button class="${selectedDay === day ? "selected" : ""}" type="button" data-day="${day}">
          ${day}日
        </button>
      `,
    )
    .join("");

  monthWheel.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const month = Number(button.dataset.month);
      selectedExpiry = {
        mode: "date",
        month,
        day: Math.min(selectedDay, daysInMonth(month)),
      };
      renderExpiryPicker();
    });
  });

  dayWheel.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedExpiry = {
        mode: "date",
        month: selectedMonth,
        day: Number(button.dataset.day),
      };
      renderExpiryPicker();
    });
  });
}

function autoSelectIcon() {
  if (selectedIconTouched) return;
  const query = nameInput.value.trim().toLowerCase();
  const category = selectedIngredientCategory;
  const match =
    iconLibrary.find((icon) => query && (icon.label.toLowerCase().includes(query) || icon.keywords.toLowerCase().includes(query))) ||
    iconLibrary.find((icon) => icon.category === category) ||
    iconLibrary[0];
  selectedIcon = match;
  renderSelectedIcon();
  renderIconGrid();
}

function openAddIngredient() {
  editingIngredientId = null;
  selectedIconCategory = "all";
  selectedIconTouched = false;
  selectedIcon = iconLibrary[0];
  selectedExpiry = { mode: "unset", month: null, day: null };
  selectedIngredientCategory = "staple";
  addForm.reset();
  ingredientFormEyebrow.textContent = "New Ingredient";
  addTitle.textContent = "添加食材";
  ingredientSaveButton.textContent = "添加到仓库";
  renderCategoryOptions();
  renderSelectedIcon();
  renderExpiryPicker();
  renderIconTabs();
  renderIconGrid();
  addModal.hidden = false;
  nameInput.focus();
}

function openEditIngredient() {
  const ingredient = ingredients.find((item) => item.id === selectedIngredientId);
  if (!ingredient) return;

  editingIngredientId = ingredient.id;
  selectedIconCategory = "all";
  selectedIconTouched = true;
  selectedIcon = iconLibrary.find((icon) => icon.code === ingredient.code) ?? iconLibrary[0];
  selectedExpiry = parseExpiry(ingredient.expiry);
  selectedIngredientCategory = ingredient.category;

  addForm.reset();
  ingredientFormEyebrow.textContent = "Edit Ingredient";
  addTitle.textContent = "编辑食材";
  ingredientSaveButton.textContent = "保存修改";
  nameInput.value = ingredient.name;
  noteInput.value = ingredient.note || "";

  closeIngredient();
  renderCategoryOptions();
  renderSelectedIcon();
  renderExpiryPicker();
  renderIconTabs();
  renderIconGrid();
  addModal.hidden = false;
  nameInput.focus();
}

function closeAddIngredient() {
  addModal.hidden = true;
  editingIngredientId = null;
}

function openIngredient(id) {
  const ingredient = ingredients.find((item) => item.id === id);
  if (!ingredient) return;

  selectedIngredientId = id;
  modalIcon.innerHTML = `<img src="${iconUrl(ingredient.code)}" alt="" />`;
  ingredientTitle.textContent = ingredient.name;
  ingredientCategory.textContent = getCategoryLabel(ingredient.category);
  ingredientExpiry.textContent = ingredient.expiry;
  ingredientNote.textContent = ingredient.note || "无";
  modal.hidden = false;
}

function closeIngredient() {
  modal.hidden = true;
  selectedIngredientId = null;
}

document.querySelectorAll(".day-toggle button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedDay = button.dataset.day;
    document.querySelectorAll(".day-toggle button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderMeals();
  });
});

document.querySelector("#addIngredientButton").addEventListener("click", openAddIngredient);
document.querySelector("#addClose").addEventListener("click", closeAddIngredient);
addModal.addEventListener("click", (event) => {
  if (event.target === addModal) closeAddIngredient();
});

document.querySelector("#mealClose").addEventListener("click", closeMealEditor);
mealModal.addEventListener("click", (event) => {
  if (event.target === mealModal) closeMealEditor();
});
document.querySelector("#mealClear").addEventListener("click", () => saveMealEditor(""));
mealForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveMealEditor(mealDishInput.value);
});

nameInput.addEventListener("input", autoSelectIcon);
iconSearchInput.addEventListener("input", renderIconGrid);

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) return;

  if (editingIngredientId) {
    ingredients = ingredients.map((ingredient) =>
      ingredient.id === editingIngredientId
        ? {
            ...ingredient,
            name,
            category: selectedIngredientCategory,
            code: selectedIcon.code,
            expiry: formatExpiry(),
            note: noteInput.value.trim(),
          }
        : ingredient,
    );
  } else {
    ingredients = [
      {
      id: Date.now(),
      name,
      category: selectedIngredientCategory,
      code: selectedIcon.code,
      expiry: formatExpiry(),
      note: noteInput.value.trim(),
      },
      ...ingredients,
    ];
  }

  closeAddIngredient();
  saveIngredients();
  renderPantry();
});

document.querySelector("#modalClose").addEventListener("click", closeIngredient);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeIngredient();
});
document.querySelector("#editIngredientButton").addEventListener("click", openEditIngredient);

document.querySelector("#useUpButton").addEventListener("click", () => {
  if (!selectedIngredientId) return;
  const ingredient = ingredients.find((item) => item.id === selectedIngredientId);
  if (!ingredient) return;

  const confirmed = window.confirm(`确认把「${ingredient.name}」标记为用完并移除吗？`);
  if (!confirmed) return;

  ingredients = ingredients.filter((item) => item.id !== selectedIngredientId);
  closeIngredient();
  saveIngredients();
  renderPantry();
});

renderCategoryOptions();
renderPantry();
renderMeals();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {
    // Local file previews and some restricted environments do not allow service workers.
  });
}
