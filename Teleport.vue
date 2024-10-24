<button @click="open = true">Открыть модальное окно</button>

<Teleport to="body">
<div v-if="open" class="modal">
  <p>Привет из модального окна!</p>
  <button @click="open = false">Закрыть</button>
</div>
</Teleport>