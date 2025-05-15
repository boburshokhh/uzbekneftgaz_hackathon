import { createClient } from '@supabase/supabase-js'

// Замените URL и ключ на свои
const supabaseUrl = 'https://your-supabase-url.supabase.co'
const supabaseKey = 'your-supabase-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Пример функции для получения данных устройств
export async function getDevices() {
  const { data, error } = await supabase
    .from('devices')
    .select('*')
  
  if (error) {
    console.error('Ошибка при получении данных:', error)
    return []
  }
  
  return data || []
}

// Пример функции для обновления состояния устройства
export async function updateDeviceStatus(deviceId, status) {
  const { data, error } = await supabase
    .from('devices')
    .update({ status: status })
    .eq('id', deviceId)
  
  if (error) {
    console.error('Ошибка при обновлении устройства:', error)
    return null
  }
  
  return data
}

// Пример функции для получения сценариев
export async function getScenarios() {
  const { data, error } = await supabase
    .from('scenarios')
    .select('*')
  
  if (error) {
    console.error('Ошибка при получении сценариев:', error)
    return []
  }
  
  return data || []
}

// Пример функции для создания нового сценария
export async function createScenario(scenario) {
  const { data, error } = await supabase
    .from('scenarios')
    .insert([scenario])
  
  if (error) {
    console.error('Ошибка при создании сценария:', error)
    return null
  }
  
  return data
}

// Пример функции для получения статистики энергопотребления
export async function getEnergyConsumption(params) {
  const { data, error } = await supabase
    .from('energy_consumption')
    .select('*')
    .eq('floor', params.floor)
    .gte('timestamp', params.startDate)
    .lte('timestamp', params.endDate)
  
  if (error) {
    console.error('Ошибка при получении данных энергопотребления:', error)
    return []
  }
  
  return data || []
} 